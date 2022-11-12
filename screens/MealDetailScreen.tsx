import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { RootStackParamList } from '../App';
import { meals } from '../data';
import { useLayoutEffect, useState } from 'react';
import MealSummary from '../components/MealSummary';
import { palette, typography } from '../assets/theme';
import List from '../components/List';
import PressableIcon from '../components/PressableButton';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addFavorite, removeFavorite } from '../redux/favoritesSlide';

type MealDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MealDetail'
>;

const MealDetailScreen = ({ route, navigation }: MealDetailScreenProps) => {
  const { id } = route.params;
  const { favorites } = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();
  const meal = meals.find(({ id: mealId }) => mealId === id) as typeof meals[0];
  const {
    imageUrl,
    title,
    complexity,
    affordability,
    duration,
    ingredients,
    steps,
  } = meal;
  const isFavorite = favorites.some((favorite) => favorite === id);

  const favoriteMealHandler = () => {
    if(!isFavorite) {
      dispatch(addFavorite(meal.id))
    } else {
      dispatch(removeFavorite(meal.id))
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <PressableIcon
          onPress={favoriteMealHandler}
          iconName={!isFavorite ? 'star-outline' : 'star'}
        />
      ),
    });
  }, [isFavorite]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title,
    });
  }, [id]);

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View style={styles.headerWrapper}>
          <Text style={styles.title}>{title}</Text>
          <MealSummary
            affordability={affordability}
            complexity={complexity}
            duration={duration}
          />
        </View>
        <Text style={styles.subtitle}>Ingredients</Text>
        <List items={ingredients} />
        <Text style={styles.subtitle}>Steps</Text>
        <List items={steps} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    margin: 16,
  },
  image: {
    width: '100%',
    height: 350,
    borderRadius: 4,
  },
  headerWrapper: {
    backgroundColor: palette.card.background,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingVertical: 8,
  },
  title: {
    marginBottom: 4,
    textAlign: 'center',
    ...typography.headers,
  },
  subtitle: {
    color: palette.subtitle,
    textAlign: 'center',
    borderBottomWidth: 3,
    borderBottomColor: palette.subtitle,
    paddingBottom: 8,
    marginTop: 20,
    marginBottom: 8,
    ...typography.subtitle,
  },
});

export default MealDetailScreen;

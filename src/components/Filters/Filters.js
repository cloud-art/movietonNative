import { useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, Text } from 'react-native';
import { Button, TextInput, View } from 'react-native-web';
import Filter from './components/Filter';
import { getCurrentYear } from '../../helpers/getCurrentYear';
import FromToFilter from './components/FromToFilter';
import { useSelector } from 'react-redux';
import { Dropdown } from 'react-native-element-dropdown';

const Filters = ({}) => {
  const { setPagination, setFiltersRating, setFiltersGenre, setFiltersOrder, setFiltersYears, filtersReset } = useActions();

  const genres = useSelector((state) => state.genres.genres);
  const orders = [
    { key: 'RATING', value: 'Рейтинг' },
    { key: 'NUM_VOTE', value: 'Количество оценок' },
    { key: 'YEAR', value: 'Год' }
  ];

  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen(!open);
  };

  const { handleSubmit, control, getValues, reset } = useForm({
    defaultValues: {
      sort: 'RATING',
      genre: '',
      rating: [1, 10],
      year: [1960, getCurrentYear()]
    }
  });

  const handleReset = () => {
    reset();
    filtersReset();
  };

  const onSubmit = handleSubmit((data) => {
    const { sort, rating, year, genre } = data;

    setPagination(1);
    setFiltersRating(rating);
    setFiltersYears(year);
    setFiltersOrder(sort);
    setFiltersGenre(genre);
  });

  return (
    <View style={styles.filters}>
      <View style={styles.top}>
        <Button onPress={handleOpen} title={'Фильтры'} />
      </View>
      {open && (
        <View style={styles.content}>
          <View style={styles.container}>
            <Filter name={'Рейтинг'}>
              <Controller
                name="rating"
                control={control}
                render={({ field: { value, onChange } }) => {
                  return <FromToFilter value={value} onChange={onChange}></FromToFilter>;
                }}
              />
            </Filter>
            <Filter name={'Год'}>
              <Controller
                name="year"
                control={control}
                render={({ field: { value, onChange } }) => {
                  return <FromToFilter value={value} onChange={onChange}></FromToFilter>;
                }}
              />
            </Filter>
            <Filter name={'Жанры'}>
              <Controller
                name="genre"
                control={control}
                render={({ field: { value, onChange } }) => {
                  return (
                    <Dropdown
                      value={value}
                      data={genres}
                      search
                      labelField="value"
                      valueField="key"
                      placeholder={value}
                      onChange={(e) => {
                        onChange(e.key);
                      }}
                    />
                  );
                }}
              />
            </Filter>
            <Filter name={'Сортировать по'}>
              <Controller
                name="sort"
                control={control}
                render={({ field: { value, onChange } }) => {
                  return (
                    <Dropdown
                      value={value}
                      data={orders}
                      labelField="value"
                      valueField="key"
                      placeholder={value}
                      onChange={(e) => {
                        onChange(e.key);
                      }}
                    />
                  );
                }}
              />
            </Filter>
          </View>
          <View style={styles.bottom}>
            <Button title={'Применить'} onPress={onSubmit} />
            <Button title={'Сбросить'} onPress={handleReset} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  filters: {
    width: '100%'
  },
  filtersActive: {},
  title: { fontWeight: 'bold', fontSize: '24px' },
  top: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' },
  bottom: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: '20%', paddingRight: '20%' },
  container: {},
  content: { marginLeft: 'auto', marginRight: 'auto' },
  inputs: { display: 'flex', flexDirection: 'row' }
});

export default Filters;

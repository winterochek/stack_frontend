import React, { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../components/utils/hook';
import { getFavoriteAssets } from '../../store/thunks/assets';

export const Home = () => {
  const { favoriteAssets } = useAppSelector(state => state.assets);
  const favoriteAssetNames = ['bitcoin', 'ethereum'];
  const fetchData = (data: string[]) => {
    data.forEach((item: string) => dispatch(getFavoriteAssets(item)));
  };
  const fetchDataRef = useRef(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (fetchDataRef.current) return;
    fetchDataRef.current = true;
    fetchData(favoriteAssetNames);
  }, []);
  console.log(favoriteAssets);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

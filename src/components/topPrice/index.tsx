import React, { FC } from 'react';
import { ISingleAsset } from '../../common/types/assets';
import { AssetsTableComponent } from '../assetsTable';

export const TopPriceComponent: FC<any> = (props: any): JSX.Element => {
  const { assets } = props;

  return <AssetsTableComponent assets={assets} />;
};

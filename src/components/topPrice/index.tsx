import React, { FC } from 'react';
import { ITablePriceData } from '../../common/types/assets';

import { AssetsTableComponent } from '../assetsTable';

export const TopPriceComponent: FC<ITablePriceData> = (props: ITablePriceData): JSX.Element => {
  const { assets } = props;

  return <AssetsTableComponent assets={assets} />;
};

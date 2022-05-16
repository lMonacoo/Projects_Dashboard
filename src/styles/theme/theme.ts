const colors = {
  black: '#000',
  white: '#fff',
  greenPrimary: '#ACE0EA',
  greenSecondary: '#84C8D6',
  greenTertiary: '#529EAC',
  grey: '#F2F2F2',
  greyPrimary: '#DFE0EB',
  greySecondary: '#DBDBDB',
  greyTertiary: '#BFBFBF',
  greyQuaternary: '#808080',
  redPrimary: '#D64747',
  greenSuccess: '#289D59',
  transparent: 'transparent',
  bg: '#ace0ea33'
};

type Colors = typeof colors;

export type ComposeThemeType = {
  colors: Colors;
};

export const properties: ComposeThemeType = { colors };

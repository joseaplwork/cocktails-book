import { actionTypes as AT } from './constants';
import * as T from './types';

export const initialState: Readonly<T.CocktailsState> = {
  cocktails: null,
  loading: false,
  error: false,
};

export default function CocktailsReducer(
  state: T.CocktailsState = initialState,
  action: T.CocktailsActions,
): T.CocktailsState {
  switch (action.type) {
    case AT.FETCH_COCKTAILS:
      return { ...state, cocktails: [], error: false, loading: true };
    case AT.FETCH_COCKTAILS_SUCCESS:
      const { drinks } = action.payload.json as T.CocktailsResponse;
      const cocktails =
        drinks?.map((drink: T.CocktailsDTO) => ({
          title: drink.strDrink,
          ingredients: [...Array(15)]
            .map((_, i: number) => drink[`strIngredient${i}` as keyof T.CocktailsDTO])
            .filter(v => v)
            .join(', '),
          thumbnail: drink.strDrinkThumb,
        })) || [];

      return { ...state, loading: false, cocktails };
    case AT.FETCH_COCKTAILS_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

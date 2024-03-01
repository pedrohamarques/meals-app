import { Provider } from "react-redux";
import { render } from "@testing-library/react-native";

import type { RenderOptions } from "@testing-library/react-native";
import {
  setupStore,
  type AppStore,
  type RootState,
} from "../store/redux/store";

type ExtendedRenderOptions = Omit<RenderOptions, "queries"> & {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
};

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({
    children,
  }: React.PropsWithChildren<{}>): React.ReactElement {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

// import movieListStore from "./movieStore";

// const useStore = () => {
//   return {
//     movieListStore,
//   };
// };

// export default useStore;

import { useContext } from "react";
import { MobXProviderContext } from "mobx-react";

const useStores = () => {
  return useContext(MobXProviderContext);
};

export default useStores;

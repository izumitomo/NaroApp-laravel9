import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/Config";
const useAuthState = () => {
  const [authState, setAuthState] = useState({
    isLogin: false,
    isLoading: true,
    /* userId: undefined,
    userName: undefined, */
  });
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthState({
          isLogin: true,
          isLoading: false,
/*           userId: user.uid,
          userName: user.displayName || undefined, */
        });
      } else {
        setAuthState({
          isLogin: false,
          isLoading: false
        });
      }
    });

    // ページ遷移時にサインイン状態の監視を解除
    return () => unsubscribe();
  }, []);

  return authState;

}

export default useAuthState;

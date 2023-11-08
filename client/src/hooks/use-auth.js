import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

export default function useAuth() {
	const auth = getAuth();
	const [user] = useAuthState(auth);

	return !!user;
}

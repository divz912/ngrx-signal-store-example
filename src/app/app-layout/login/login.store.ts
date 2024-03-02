import { signalStore, withMethods, withState } from "@ngrx/signals";
import { LoginService } from "./login.service";

type LoginState = {
    loading: boolean;
    loaded: boolean;
}

const initialState: LoginState = {
    loaded: false,
    loading: false
}

signalStore(
    withState(initialState),
    withMethods(() => ({
        loginUser(): void {
            // loginService.loginIntoServer();
        }
    })),

)
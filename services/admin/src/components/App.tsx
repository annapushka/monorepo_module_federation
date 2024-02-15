import { Outlet } from "react-router-dom";
import { deepMerge } from '@packages/shared/src/utils/deepMerge';
import { UserCard } from "@packages/shared/src/components/UserCard";

export const App = () => {

    const handleClick = () => {
        deepMerge({a: 1}, {b: 2})
    }

    return (
        <div>
            <h1>ADMIN MODULE</h1>
            <button onClick={handleClick}>merge</button>
            <Outlet/>
            <UserCard username="Admin"/>
        </div>
    )
}
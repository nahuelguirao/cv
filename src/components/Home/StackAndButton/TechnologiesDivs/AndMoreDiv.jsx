import { GoPlus } from "react-icons/go";

export function AndMoreDiv({ andMore }) {
    return (
        <div>
            <GoPlus className='iconStack more' />
            <p>{andMore}</p>
        </div>
    )
}
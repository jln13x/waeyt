import { DateRangeContext } from "context/DateRangeContext"
import { useContext } from "react"

export const useDateRange = () => {
    const context = useContext(DateRangeContext)

    if (!context){
        throw new Error('Must be inside a date range context');
    }

    return context;
}
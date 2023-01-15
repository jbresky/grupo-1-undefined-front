import HomeSkeleton from "../../Components/UI/HomeSkeleton";
import TransactionsTable from "../../Components/UI/TableBalance";
import { useGetUserDetails } from "../../hooks/useUsers";
import { useParams } from "react-router";

export default function() {
    const {id} = useParams();

    const {data: userDetails, isLoading} = useGetUserDetails(id);

    if(isLoading) return <HomeSkeleton/>

    const {transaction} = userDetails

    return (
        <TransactionsTable transaction={transaction}/>
    )
}
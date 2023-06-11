import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
const useClass = () =>{
    const {user} = useContext(AuthContext);
    const { refetch, data: classe = [] } = useQuery({
        queryKey: ['usersclass', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://assignment-twelve-server-gilt.vercel.app/myclasses?email=${user?.email}`)
            // console.log('res from axios', res)
            return res.json();
        },
    })

    return [classe, refetch]
    
}
export default useClass;




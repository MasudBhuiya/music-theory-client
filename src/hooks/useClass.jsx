import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
const useClass = () =>{
    const {user} = useContext(AuthContext);
    const { refetch, data: classe = [] } = useQuery({
        queryKey: ['usersclass', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myclasses?email=${user?.email}`)
            // console.log('res from axios', res)
            return res.json();
        },
    })

    return [classe, refetch]
    
}
export default useClass;




//-----------------------------------------------
// import { useQuery } from '@tanstack/react-query'
// import useAxiosSecure from './useAxiosSecure';
// import useAuth from './useAuth';
// const useCart = () => {
//     const { user, loading } = useAuth();
//     const [axiosSecure] = useAxiosSecure();
//     const { refetch, data: cart = [] } = useQuery({
//         queryKey: ['carts', user?.email],
//         enabled: !loading,
//         queryFn: async () => {
//             const res = await axiosSecure(`/myclasses?email=${user?.email}`)
//             console.log('res from axios', res)
//             return res.data;
//         },
//     })

//     return [cart, refetch]

// }
// export default useCart;
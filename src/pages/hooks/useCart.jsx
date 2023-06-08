import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
const useCart = ()=>{
const {user} = useContext(AuthContext);
const { isLoading,refetch, data: classes = [] } = useQuery({
    queryKey: ['classes', user?.email],
    queryFn: async () => 
    {
        const res = await fetch(`http://localhost:5000/classes`)
    return res.json();
    }
  })
  return [classes,refetch, isLoading]
}
export default useCart;
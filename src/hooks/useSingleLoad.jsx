import { useQuery } from '@tanstack/react-query';

const useSingleLoad = ({ id }) => {

    const { isLoading, data: classItem = '' } = useQuery({
        queryKey: ['classItem', id],
        queryFn: () =>
            fetch(`https://b7a12-summer-camp-server-side-aalnoman10.vercel.app/classes/${id}`).then(
                (res) => res.json()
            ),
    })

    return [isLoading, classItem]
};

export default useSingleLoad;
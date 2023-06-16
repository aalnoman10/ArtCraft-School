import { useQuery } from '@tanstack/react-query';

const useSingleLoad = ({ id }) => {

    const { isLoading, data: classItem = '' } = useQuery({
        queryKey: ['classItem', id],
        queryFn: () =>
            fetch(`http://localhost:5000/classes/${id}`).then(
                (res) => res.json()
            ),
    })

    return [isLoading, classItem]
};

export default useSingleLoad;
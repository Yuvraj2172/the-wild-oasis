import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

export function useDeleteCabin() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("Cabin Successfully deleted", {
        icon: "👍🏻",
      });
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) =>
      toast(err.message, {
        icon: " ❌",
      }),
  });
  return { isDeleting, deleteCabin };
}

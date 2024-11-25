import {useFetch} from "@/app/hooks/useFetch";
import LoadingSpinner from "@/app/github-login2/LoadingSpinner";

export default function Fetch({
                                  uri,
                                  renderSuccess,
                                  loadingFallback = <LoadingSpinner />,
                                  renderError = error => (
                                      <pre>{JSON.stringify(error, null, 2)}</pre>
                                  )
                              }) {
    const { loading, data, error } = useFetch(uri);
    if (loading) return loadingFallback;
    if (error) return renderError(error);
    if (data) return renderSuccess({ data });
}

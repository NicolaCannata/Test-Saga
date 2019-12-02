export interface Store {
  data?: datas[];
  isLoading?: boolean;
  error?: Error;
}

interface datas {
  text?: string;
}

import { useQuery } from '@tanstack/react-query';

const { ipcRenderer } = window?.electron || {};

export function useIsIpfsInstalled() {
  return useQuery({
    queryKey: ['ipfs', 'isInstalled'],
    queryFn: () => ipcRenderer.invoke('ipfs-isInstalled'),
    initialData: () => false,
    placeholderData: false,
    enabled: Boolean(ipcRenderer),
  });
}

import useOnlineStatus from './useOnlineStatus';

export default function StatusBar() {
  const isOnline = useOnlineStatus();
  console.log("Status bar updated");
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}
import useOnlineStatus from './useOnlineStatus';

export default function SaveButton() {
  const isOnline = useOnlineStatus();
  console.log("SaveButton updated");

  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}

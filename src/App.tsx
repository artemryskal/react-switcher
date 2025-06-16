import { items } from '@/mocks';
import { Switcher } from '@/components/Switcher';

export const App = () => {
  return (
    <div style={{ width: '300px' }}>
      <Switcher items={items} initialValue={1} />
    </div>
  );
};

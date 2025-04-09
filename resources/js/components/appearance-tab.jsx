import { useAppearance } from '@/hooks/use-appearance';
import { Monitor, Moon, Sun } from 'lucide-react';
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

const AppearanceTab = () => {
  const { appearance, updateAppearance } = useAppearance();

  const tabs = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' },
  ];

  return (
    <div className='inline-flex'>
      <ToggleGroup value={appearance} onValueChange={(val) => {
        if (val) {
          updateAppearance(val)
        }
      }} type="single" size="sm">
        {tabs.map(({ value, icon: Icon, label }) => (
          <ToggleGroupItem key={value} value={value}>
            <Icon />{label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  )
}

export default AppearanceTab
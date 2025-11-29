import React, { useState } from 'react';
import QiblaDirection from './QiblaDirection';
import TasbihCounter from './TasbihCounter';
import HajjUmrahGuide from './HajjUmrahGuide';
import ZakatCalculator from './ZakatCalculator';
import DuroodShareef from './DuroodShareef';
import DuasPage from './DuasPage';
import WazifaCollection from './WazifaCollection';
import IslamicCalendarPage from './IslamicCalendarPage';
import AsmaUlHusnaPage from './AsmaUlHusnaPage';
import ToolCard from './ToolCard';
import { toolsData } from '../data/toolsData';

const IslamicTools = () => {
  const [showComponent, setShowComponent] = useState(null);

  const handleToolClick = (tool) => {
    const componentMap = {
      'Qibla': 'qibla',
      'Tasbih': 'tasbih', 
      'Hajj': 'hajj',
      'Zakat': 'zakat',
      'Duas': 'duas',
      'Wazaif': 'wazaif',
      'Calendar': 'calendar',
      'Names': 'names'
    };
    setShowComponent(componentMap[tool.name] || null);
  };

  const renderComponent = () => {
    const BackButton = ({ className = "mb-4" }) => (
      <button
        onClick={() => setShowComponent(null)}
        className={`${className} bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm cursor-pointer transition-colors`}
      >
        ← Back to Tools
      </button>
    );

    const components = {
      qibla: () => (<div><BackButton /><QiblaDirection /></div>),
      tasbih: () => (<div><BackButton /><TasbihCounter /></div>),
      hajj: () => (<div><BackButton /><HajjUmrahGuide /></div>),
      zakat: () => (<div><BackButton /><ZakatCalculator /></div>),
      duas: () => (<div><BackButton className="fixed top-4 left-4 z-50 mb-4" /><DuasPage /></div>),
      wazaif: () => (<div><BackButton className="fixed top-4 left-4 z-50 mb-4" /><WazifaCollection /></div>),
      calendar: () => (<div><BackButton className="fixed top-4 left-4 z-50 mb-4" /><IslamicCalendarPage /></div>),
      names: () => (<div><BackButton className="fixed top-4 left-4 z-50 mb-4" /><AsmaUlHusnaPage /></div>)
    };

    return components[showComponent]?.() || null;
  };

  if (showComponent) {
    return renderComponent();
  }

  return (
    <div className="relative z-50 p-2 sm:p-4">
      <div className="flex gap-2 sm:gap-3 horizontal-scroll-allowed scrollbar-hide relative z-50 overflow-x-auto md:justify-center lg:justify-center max-w-full">
        {toolsData.map((tool) => (
          <ToolCard key={tool.id} tool={tool} onClick={handleToolClick} />
        ))}
      </div>
    </div>
  );
};

export default IslamicTools;
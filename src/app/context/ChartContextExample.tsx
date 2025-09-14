// import React, { useState } from 'react';
// import { ChartProvider, useChartContext, chartThemes, chartSettingsPresets } from './ChartContext';
// import { SimpleLineChart, BarChart, PieChart, LineChartSeries, BarChartSeries, PieChartData } from '../components/organize';

// // Example 1: Basic Usage - Using ChartProvider with default settings
// const BasicChartExample: React.FC = () => {
//   return (
//     <ChartProvider>
//       <ChartWithContext />
//     </ChartProvider>
//   );
// };

// // Example 2: Custom Theme and Settings
// const CustomChartExample: React.FC = () => {
//   return (
//     <ChartProvider initialTheme={chartThemes.dark} initialSettings={chartSettingsPresets.interactive}>
//       <ChartWithContext />
//     </ChartProvider>
//   );
// };

// // Example 3: Dynamic Theme Switching
// const DynamicThemeExample: React.FC = () => {
//   const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'corporate' | 'minimal'>('light');

//   return (
//     <ChartProvider initialTheme={chartThemes[currentTheme]}>
//       <div>
//         <div style={{ marginBottom: '20px' }}>
//           <h3>Theme Selector</h3>
//           <select value={currentTheme} onChange={(e) => setCurrentTheme(e.target.value as any)} style={{ padding: '8px', marginRight: '10px' }}>
//             <option value="light">Light Theme</option>
//             <option value="dark">Dark Theme</option>
//             <option value="corporate">Corporate Theme</option>
//             <option value="minimal">Minimal Theme</option>
//           </select>
//         </div>
//         <ChartWithContext />
//       </div>
//     </ChartProvider>
//   );
// };

// // Example 4: Settings Control Panel
// const SettingsControlExample: React.FC = () => {
//   return (
//     <ChartProvider>
//       <div style={{ display: 'flex', gap: '20px' }}>
//         <div style={{ flex: 1 }}>
//           <SettingsControlPanel />
//         </div>
//         <div style={{ flex: 2 }}>
//           <ChartWithContext />
//         </div>
//       </div>
//     </ChartProvider>
//   );
// };

// // Component that uses the chart context
// const ChartWithContext: React.FC = () => {
//   const { getChartOptions, theme } = useChartContext();

//   // Sample data
//   const lineData: LineChartSeries[] = [
//     {
//       name: 'Sales',
//       data: [
//         { x: new Date('2025-01-01').getTime(), y: 30 },
//         { x: new Date('2025-02-01').getTime(), y: 45 },
//         { x: new Date('2025-03-01').getTime(), y: 35 },
//         { x: new Date('2025-04-01').getTime(), y: 60 },
//         { x: new Date('2025-05-01').getTime(), y: 50 },
//       ],
//     },
//   ];

//   const barData: BarChartSeries[] = [
//     {
//       name: 'Q1 Sales',
//       data: [44, 55, 41, 67, 22, 43],
//     },
//   ];

//   const pieData: PieChartData[] = [
//     {
//       data: [44, 55, 13, 43, 22],
//     },
//   ];

//   return (
//     <div style={{ padding: '20px', backgroundColor: theme.background }}>
//       <h2 style={{ color: theme.textColor, fontFamily: theme.fontFamily }}>Charts with Context Settings</h2>

//       <div style={{ marginBottom: '30px' }}>
//         <h3 style={{ color: theme.textColor }}>Line Chart</h3>
//         <SimpleLineChart
//           data={lineData}
//           options={getChartOptions('line', {
//             title: { text: 'Sales Trend' },
//             xaxis: { type: 'datetime' },
//           })}
//           height={300}
//         />
//       </div>

//       <div style={{ marginBottom: '30px' }}>
//         <h3 style={{ color: theme.textColor }}>Bar Chart</h3>
//         <BarChart
//           data={barData}
//           options={getChartOptions('bar', {
//             title: { text: 'Quarterly Sales' },
//             xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
//           })}
//           height={300}
//         />
//       </div>

//       <div style={{ marginBottom: '30px' }}>
//         <h3 style={{ color: theme.textColor }}>Pie Chart</h3>
//         <PieChart
//           data={pieData}
//           options={getChartOptions('pie', {
//             title: { text: 'Market Share' },
//             labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
//           })}
//           height={300}
//         />
//       </div>
//     </div>
//   );
// };

// // Settings control panel component
// const SettingsControlPanel: React.FC = () => {
//   const { theme, settings, updateTheme, updateSettings, resetToDefaults } = useChartContext();

//   return (
//     <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
//       <h3>Chart Settings Control Panel</h3>

//       {/* Theme Controls */}
//       <div style={{ marginBottom: '20px' }}>
//         <h4>Theme Settings</h4>
//         <div style={{ marginBottom: '10px' }}>
//           <label>Background Color:</label>
//           <input type="color" value={theme.background} onChange={(e) => updateTheme({ background: e.target.value })} style={{ marginLeft: '10px' }} />
//         </div>
//         <div style={{ marginBottom: '10px' }}>
//           <label>Text Color:</label>
//           <input type="color" value={theme.textColor} onChange={(e) => updateTheme({ textColor: e.target.value })} style={{ marginLeft: '10px' }} />
//         </div>
//         <div style={{ marginBottom: '10px' }}>
//           <label>Grid Color:</label>
//           <input type="color" value={theme.gridColor} onChange={(e) => updateTheme({ gridColor: e.target.value })} style={{ marginLeft: '10px' }} />
//         </div>
//       </div>

//       {/* Animation Controls */}
//       <div style={{ marginBottom: '20px' }}>
//         <h4>Animation Settings</h4>
//         <div style={{ marginBottom: '10px' }}>
//           <label>
//             <input
//               type="checkbox"
//               checked={settings.animations.enabled}
//               onChange={(e) =>
//                 updateSettings({
//                   animations: { ...settings.animations, enabled: e.target.checked },
//                 })
//               }
//               style={{ marginRight: '8px' }}
//             />
//             Enable Animations
//           </label>
//         </div>
//         <div style={{ marginBottom: '10px' }}>
//           <label>Animation Speed:</label>
//           <input
//             type="range"
//             min="100"
//             max="2000"
//             value={settings.animations.speed}
//             onChange={(e) =>
//               updateSettings({
//                 animations: { ...settings.animations, speed: parseInt(e.target.value) },
//               })
//             }
//             style={{ marginLeft: '10px', width: '100px' }}
//           />
//           <span style={{ marginLeft: '10px' }}>{settings.animations.speed}ms</span>
//         </div>
//       </div>

//       {/* Toolbar Controls */}
//       <div style={{ marginBottom: '20px' }}>
//         <h4>Toolbar Settings</h4>
//         <div style={{ marginBottom: '10px' }}>
//           <label>
//             <input
//               type="checkbox"
//               checked={settings.toolbar.show}
//               onChange={(e) =>
//                 updateSettings({
//                   toolbar: { ...settings.toolbar, show: e.target.checked },
//                 })
//               }
//               style={{ marginRight: '8px' }}
//             />
//             Show Toolbar
//           </label>
//         </div>
//         <div style={{ marginBottom: '10px' }}>
//           <label>
//             <input
//               type="checkbox"
//               checked={settings.toolbar.tools.download}
//               onChange={(e) =>
//                 updateSettings({
//                   toolbar: {
//                     ...settings.toolbar,
//                     tools: { ...settings.toolbar.tools, download: e.target.checked },
//                   },
//                 })
//               }
//               style={{ marginRight: '8px' }}
//             />
//             Enable Download
//           </label>
//         </div>
//       </div>

//       {/* Legend Controls */}
//       <div style={{ marginBottom: '20px' }}>
//         <h4>Legend Settings</h4>
//         <div style={{ marginBottom: '10px' }}>
//           <label>
//             <input
//               type="checkbox"
//               checked={settings.legend.show}
//               onChange={(e) =>
//                 updateSettings({
//                   legend: { ...settings.legend, show: e.target.checked },
//                 })
//               }
//               style={{ marginRight: '8px' }}
//             />
//             Show Legend
//           </label>
//         </div>
//         <div style={{ marginBottom: '10px' }}>
//           <label>Position:</label>
//           <select
//             value={settings.legend.position}
//             onChange={(e) =>
//               updateSettings({
//                 legend: { ...settings.legend, position: e.target.value as any },
//               })
//             }
//             style={{ marginLeft: '10px' }}
//           >
//             <option value="top">Top</option>
//             <option value="right">Right</option>
//             <option value="bottom">Bottom</option>
//             <option value="left">Left</option>
//           </select>
//         </div>
//       </div>

//       {/* Reset Button */}
//       <div>
//         <button
//           onClick={resetToDefaults}
//           style={{
//             padding: '10px 20px',
//             backgroundColor: '#dc3545',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer',
//           }}
//         >
//           Reset to Defaults
//         </button>
//       </div>
//     </div>
//   );
// };

// // Example 5: Multiple Chart Providers (Nested)
// const NestedProvidersExample: React.FC = () => {
//   return (
//     <ChartProvider initialTheme={chartThemes.light}>
//       <div>
//         <h2>Parent Theme (Light)</h2>
//         <ChartWithContext />

//         <ChartProvider initialTheme={chartThemes.dark}>
//           <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#1a1a1a' }}>
//             <h2 style={{ color: 'white' }}>Nested Theme (Dark)</h2>
//             <ChartWithContext />
//           </div>
//         </ChartProvider>
//       </div>
//     </ChartProvider>
//   );
// };

// // Example 6: Custom Hook Usage
// const CustomHookExample: React.FC = () => {
//   const { theme, settings, updateTheme, getChartOptions } = useChartContext();

//   const handleThemeChange = (newTheme: keyof typeof chartThemes) => {
//     updateTheme(chartThemes[newTheme]);
//   };

//   return (
//     <div>
//       <h2>Custom Hook Example</h2>
//       <p>Current theme: {theme.background === '#ffffff' ? 'Light' : 'Dark'}</p>
//       <button onClick={() => handleThemeChange('dark')}>Switch to Dark</button>
//       <button onClick={() => handleThemeChange('light')}>Switch to Light</button>

//       <SimpleLineChart
//         data={[
//           {
//             name: 'Sample Data',
//             data: [
//               { x: 1, y: 10 },
//               { x: 2, y: 20 },
//               { x: 3, y: 15 },
//               { x: 4, y: 25 },
//             ],
//           },
//         ]}
//         options={getChartOptions('line')}
//         height={300}
//       />
//     </div>
//   );
// };

// // Main example component that demonstrates all usage patterns
// const ChartContextExample: React.FC = () => {
//   const [activeExample, setActiveExample] = useState<string>('basic');

//   const examples = {
//     basic: BasicChartExample,
//     custom: CustomChartExample,
//     dynamic: DynamicThemeExample,
//     settings: SettingsControlExample,
//     nested: NestedProvidersExample,
//     hook: CustomHookExample,
//   };

//   const ActiveExample = examples[activeExample as keyof typeof examples];

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Chart Context Usage Examples</h1>

//       <div style={{ marginBottom: '20px' }}>
//         <h3>Select Example:</h3>
//         <select value={activeExample} onChange={(e) => setActiveExample(e.target.value)} style={{ padding: '8px', fontSize: '16px' }}>
//           <option value="basic">Basic Usage</option>
//           <option value="custom">Custom Theme & Settings</option>
//           <option value="dynamic">Dynamic Theme Switching</option>
//           <option value="settings">Settings Control Panel</option>
//           <option value="nested">Nested Providers</option>
//           <option value="hook">Custom Hook Usage</option>
//         </select>
//       </div>

//       <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
//         <ActiveExample />
//       </div>

//       {/* Usage Documentation */}
//       <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
//         <h2>Usage Documentation</h2>

//         <h3>1. Basic Setup</h3>
//         <pre style={{ backgroundColor: '#e9ecef', padding: '15px', borderRadius: '4px', overflow: 'auto' }}>
//           {`import { ChartProvider, useChartContext } from './context/ChartContext';

// // Wrap your app or chart components
// <ChartProvider>
//   <YourChartComponents />
// </ChartProvider>`}
//         </pre>

//         <h3>2. Using the Context</h3>
//         <pre style={{ backgroundColor: '#e9ecef', padding: '15px', borderRadius: '4px', overflow: 'auto' }}>
//           {`const MyChart: React.FC = () => {
//   const { getChartOptions, theme, settings } = useChartContext();

//   return (
//     <SimpleLineChart
//       data={chartData}
//       options={getChartOptions('line', {
//         title: { text: 'My Chart' },
//         // Custom options override context settings
//       })}
//     />
//   );
// };`}
//         </pre>

//         <h3>3. Predefined Themes</h3>
//         <pre style={{ backgroundColor: '#e9ecef', padding: '15px', borderRadius: '4px', overflow: 'auto' }}>
//           {`import { chartThemes } from './context/ChartContext';

// // Use predefined themes
// <ChartProvider initialTheme={chartThemes.dark}>
//   <YourCharts />
// </ChartProvider>`}
//         </pre>

//         <h3>4. Dynamic Theme Updates</h3>
//         <pre style={{ backgroundColor: '#e9ecef', padding: '15px', borderRadius: '4px', overflow: 'auto' }}>
//           {`const ThemeSwitcher: React.FC = () => {
//   const { updateTheme } = useChartContext();

//   return (
//     <button onClick={() => updateTheme(chartThemes.dark)}>
//       Switch to Dark Theme
//     </button>
//   );
// };`}
//         </pre>
//       </div>
//     </div>
//   );
// };

// export default ChartContextExample;

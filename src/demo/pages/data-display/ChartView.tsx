import { useState } from "react"
import { MukText } from "../../../lib"
import { MukCheckbox } from "../../../lib"
import { MukChart } from "../../../lib"

import type { ChartData } from 'chart.js'

/* CHART DATA */
const barChartData: ChartData<'bar'> = {
   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
   datasets: [
      {
         label: 'Revenue',
         data: [12000, 19000, 15000, 22000, 28000, 24000],
         backgroundColor: '#4f46e5',
         borderRadius: 6
      }
   ]
};


const lineChartData: ChartData<'line'> = {
   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
   datasets: [
      {
         label: 'Current Week',
         data: [65, 59, 80, 81, 56, 55, 40],
         borderColor: '#10b981',
         backgroundColor: 'rgba(16, 185, 129, 0.1)',
         tension: 0.3,
         fill: true
      },
      {
         label: 'Previous Week',
         data: [28, 48, 40, 19, 86, 27, 90],
         borderColor: '#9ca3af',
         borderDash: [5, 5],
         tension: 0.3
      }
   ]
};


const doughnutChartData: ChartData<'doughnut'> = {
   labels: ['Direct', 'Organic Search', 'Social Media', 'Referral'],
   datasets: [
      {
         data: [35, 40, 15, 10],
         backgroundColor: ['#6366f1', '#10b981', '#f59e0b', '#ef4444']
      }
   ]
};

const emptyChartData: ChartData = {
   labels: [],
   datasets: []
};

function ChartView(){
   const [isLoading, setIsLoading] = useState(false);
   const [showTitle, setShowTitle] = useState(true);
   const [isEmpty, setIsEmpty] = useState(false);

   return (
      <div className="muk-page">
         <div className="muk-container">
            <div className="muk-page__wrpper">
               <div className="muk-page__heder">
                  <MukText as="h2" type="muk-subheading"> Chart Preview</MukText>
               </div>
               <div className="muk-page__content">
                  <div className="demo-controls muk-section">
                     <MukText type="muk-subheading">Demo Controls</MukText>
                      <MukCheckbox
                        label="Loading State"
                        value={isLoading}
                        onChange={(val) => setIsLoading(val)}
                     />
                      <MukCheckbox
                        label="Show Title"
                        value={showTitle}
                        onChange={(val) => setShowTitle(val)}
                     />
                      <MukCheckbox
                        label="Empty Data"
                        value={isEmpty}
                        onChange={(val) => setIsEmpty(val)}
                     />
                  </div>
                  <div className="muk-section muk-chart__wrapper">
                     <div className="muk-chart-item">
                        <MukChart
                           type="bar"
                           title={showTitle ? 'Monthly revenue ($)' : undefined}
                           data={isEmpty ? emptyChartData : barChartData}
                           loading={isLoading}
                           height="280px" 
                        />
                     </div>
                     <div className="muk-chart-item">
                        <MukChart
                           type="line"
                           title={showTitle ? 'User Acivity (2025- 2026)' : undefined}
                           data={isEmpty ? emptyChartData : lineChartData}
                           loading={isLoading}
                           height="280px" 
                        />
                     </div>
                     <div className="muk-chart-item">
                        <MukChart
                           type="doughnut"
                           title={showTitle ? 'Traffic Sources' : undefined}
                           data={isEmpty ? emptyChartData : doughnutChartData}
                           loading={isLoading}
                           height="280px" 
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}


export default ChartView

import React, { useEffect, useState } from 'react';
import CardDashboardAtom from "../components/atoms/CardDashboardAtom";
import CardStatsAtom from '../components/atoms/Statistics/CardStatsAtom';
import SelectionDayDataService from "../services/recruitmentService/selectionDay.service"

export default function Dashboard() {
  const [nextSelectionDay, setNextSelectionDay] = useState({});
  const [attendees, setAttendees] = useState(0);

  useEffect(() => {
    SelectionDayDataService.getNextSelectionDay()
      .then((response) => {
        const nextSelectionDay = response.data.data;
        setNextSelectionDay(nextSelectionDay);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []); 

  return (
    <>
  <div>
  <div className='h-1/2 bg-teal-700 md:block md:absolute md:top-[80px] md:left-64 md:right-2 lg:bottom-1000 w-auto p-2 pb-5'>
  <div className="px-4 mt-5 md:px-10 mx-auto w-full">
    <h2 className="mb-4 text-xl font-bold leading-none tracking-tight text-white text-center md:text-5xl lg:text-4xl dark:text-white">CAPTACIÓN</h2>
    <div className="flex flex-wrap px-4 py-20">
            <CardDashboardAtom
              title="Próxima Jornada de Selección"
              school={nextSelectionDay.school}
              date={nextSelectionDay.date}
              attendees={attendees}
              statIconColor="bg-orange-500"
              statIconImage={(
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  {/* ... (código del icono) */}
                </svg>
              )}
            />
        
            <CardStatsAtom
              className="py-4"
              statSubtitle="Total Mujeres 2023"
              statTitle="350,897"
             
              statPercentColor="text-emerald-500"
              statIconColor="bg-green-500"
              statIconImage={(
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  {/* ... (código del icono) */}
                </svg>
              )}
            />
      
      <CardStatsAtom
              statSubtitle="Total Mujeres 2023"
              statTitle="350,897"
              
              statPercentColor="text-emerald-500"
              statIconColor="bg-green-500"
              statIconImage={(
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  {/* ... (código del icono) */}
                </svg>
              )}
            />

<CardStatsAtom
              statSubtitle="Total Mujeres 2023"
              statTitle="350,897"
              
              statPercentColor="text-emerald-500"
              statIconColor="bg-green-500"
              statIconImage={(
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  {/* ... (código del icono) */}
                </svg>
              )}
            />

<CardStatsAtom
              statSubtitle="Total Mujeres 2023"
              statTitle="350,897"
              
              statPercentColor="text-emerald-500"
              statIconColor="bg-green-500"
              statIconImage={(
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  {/* ... (código del icono) */}
                </svg>
              )}
            />
       
            <CardStatsAtom
              statSubtitle="Total Mujeres 2023"
              statTitle="350,897"
        
              statPercentColor="text-emerald-500"
              statIconColor="bg-orange-500"
              statIconImage={(
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  {/* ... (código del icono) */}
                </svg>
              )}
            />
        </div>
    </div>
  </div>


  <div className='h-1/2 bg-orange-500 md:block md:absolute md:bottom-0 md:left-64 md:right-2 w-auto p-2'>
  <div className="px-4 mt-5 md:px-10 mx-auto w-full">
    <h2 className="mb-4 text-xl font-bold leading-none tracking-tight text-white text-center md:text-5xl lg:text-4xl dark:text-white">SEGUIMIENTO</h2>
    <div className="flex flex-wrap px-4 py-20">
            <CardDashboardAtom
              title="Próxima Jornada de Selección"
              school={nextSelectionDay.school}
              date={nextSelectionDay.date}
              attendees={attendees}
              statIconColor="bg-orange-500"
              statIconImage={(
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  {/* ... (código del icono) */}
                </svg>
              )}
            />
        

         
            <CardStatsAtom
              className="py-4"
              statSubtitle="Total Mujeres 2023"
              statTitle="350,897"
             
              statPercentColor="text-emerald-500"
              statIconColor="bg-green-500"
              statIconImage={(
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  {/* ... (código del icono) */}
                </svg>
              )}
            />
      
      <CardStatsAtom
              statSubtitle="Total Mujeres 2023"
              statTitle="350,897"
              
              statPercentColor="text-emerald-500"
              statIconColor="bg-green-500"
              statIconImage={(
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  {/* ... (código del icono) */}
                </svg>
              )}
            />

<CardStatsAtom
              statSubtitle="Total Mujeres 2023"
              statTitle="350,897"
              
              statPercentColor="text-emerald-500"
              statIconColor="bg-green-500"
              statIconImage={(
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  {/* ... (código del icono) */}
                </svg>
              )}
            />

<CardStatsAtom
              statSubtitle="Total Mujeres 2023"
              statTitle="350,897"
              
              statPercentColor="text-emerald-500"
              statIconColor="bg-green-500"
              statIconImage={(
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  {/* ... (código del icono) */}
                </svg>
              )}
            />
       
            <CardStatsAtom
              statSubtitle="Total Mujeres 2023"
              statTitle="350,897"
        
              statPercentColor="text-emerald-500"
              statIconColor="bg-orange-500"
              statIconImage={(
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  {/* ... (código del icono) */}
                </svg>
              )}
            />
        </div>
    </div>
    </div>
  </div>
  </>
  );
}
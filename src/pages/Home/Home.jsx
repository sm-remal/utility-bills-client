import React from 'react';
import Banner from '../../components/Banner/Banner';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import { useLoaderData } from 'react-router';
import BillCards from '../../components/BillCards/BillCards';

const Home = () => {
    const latestBills = useLoaderData()
    console.log(latestBills);
    return (
        <div>
            <Banner></Banner>
            <CategoryCard></CategoryCard>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-pink-500 mb-12">
                    Latest Bills
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {latestBills?.map(bill => (
                        <BillCards key={bill._id} bill={bill} />
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default Home;
import React, { ReactNode } from 'react'
import { Header } from '@/components/Header'
import { Cart } from '@/components/Cart'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='h-[100dvh]'>
            <section className='h-[10dvh] px-4 py-2 '>
                <Header />
            </section>
            <section className='h-[90dvh] lg:flex lg:gap-x-4'>
                <main className='basis-4/4 lg:basis-3/4 p-5 lg:pr-2 overflow-y-auto'>
                    {children}
                </main>
                <div className=' basis-1/4 p-5 lg:pl-2'>
                    <Cart />
                </div>
            </section>
        </div>
    )
}

export default layout
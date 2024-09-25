"use client";
import { commandIcon } from '@/app/utils/Icons';
import { Button } from '@/components/ui/button';
import { Command, CommandInput } from '@/components/ui/command';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Search } from 'lucide-react';
import React from 'react'

function SearchDialog() {
    return <div className='search-btn'>
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="border inline-flex items-center justify-center text-sm font-medium hover:dark:bg-[#131313] hover:bg-slate-100  ease-in-out duration-200"
                >
                    <p className="text-sm text-muted-foreground">Search Here...</p>
                    <div className="command dark:bg-[#262626] bg-slate-200  py-[2px] pl-[5px] pr-[7px] rounded-sm ml-[10rem] flex items-center gap-2">
                        {commandIcon}
                        <span className="text-[9px]">F</span>
                    </div>
                </Button>
            </DialogTrigger>
            <DialogContent className='p-0'>
                <Command className='rounded-lg border shadow-md'>
                    <div className="p-3 flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 gap-2">
                        <Search className="mt-0.5 h-4 w-4 shrink-0 opacity-50" />
                        <input className="flex mt-0.5 h-4 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50" placeholder='Type a command or search...' />
                    </div>
                    <ul className='px-3 pb-2'>
                        <p className='p-2 text-sm text-muted-foreground'>Suggestions</p>
                    </ul>
                </Command>
            </DialogContent>
        </Dialog>
    </div>;
}

export default SearchDialog
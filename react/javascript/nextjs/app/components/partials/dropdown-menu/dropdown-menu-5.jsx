'use client';

import Link from 'next/link';
import { FileDown, FilePlus, FileUp, Settings } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function DropdownMenu5({ trigger }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-[150px]" side="bottom" align="end">
        <DropdownMenuItem asChild>
          <Link href="/account/home/settings-plain">
            <FilePlus />
            <span>Add</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/account/members/import-members">
            <FileDown />
            <span>Import</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <FileUp />
            <span>Export</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-[150px]">
            <DropdownMenuItem asChild>
              <Link href="/account/home/settings-sidebar">
                <span>PDF</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/account/home/settings-sidebar">
                <span>CSV</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/account/home/settings-sidebar">
                <span>Excel</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem asChild>
          <Link href="/account/security/privacy-settings">
            <Settings />
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

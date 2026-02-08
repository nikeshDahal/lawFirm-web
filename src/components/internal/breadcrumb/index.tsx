"use client";
import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
const CustomBreadcrumb: React.FC = () => {
  const pathname = usePathname();
  const metaInfo = pathname.split("/").slice(1);
  return (
    <div className="max-w-7xl mx-auto px-6 py-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="font-semibold text-primary" href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          {metaInfo?.length > 0 &&
            metaInfo?.map((item: string, i: number) => (
              <React.Fragment key={i}>
                {i + 1 === metaInfo.length ? (
                  <>
                    <BreadcrumbItem>
                      <BreadcrumbPage className="font-semibold text-slate-600 capitalize">
                        {item.replace(/-/, " ")}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                ) : (
                  <>
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        className="font-semibold text-primary hover:text-secondary capitalize"
                        href={`/${item}`}
                      >
                        {item.replace(/-/, " ")}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                  </>
                )}
              </React.Fragment>
            ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default CustomBreadcrumb;

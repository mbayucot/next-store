"use client";

import { ChartAreaInteractive } from "./chart-area-interactive";
import { SectionCards } from "./section-cards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { DatePickerWithRange } from "./date-range-picker";
import { Overview } from "@/app/(protected)/dashboard/overview";
import { RecentSales } from "@/app/(protected)/dashboard/recent-sales";
import { ChartAreaGradient } from "@/app/(protected)/dashboard/chart-area-gradient";
import { ChartBarMultiple } from "@/app/(protected)/dashboard/chart-bar-multiple";
import { ChartPieDonutText } from "@/app/(protected)/dashboard/chart-pie-donut-text";
import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <div className="p-4">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <Tabs defaultValue="overview" className="space-y-4">
            <div className="flex items-center justify-between space-y-2">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics" disabled>
                  Analytics
                </TabsTrigger>
                <TabsTrigger value="reports" disabled>
                  Reports
                </TabsTrigger>
              </TabsList>
              <div className="flex items-center space-x-2">
                <DatePickerWithRange />
              </div>
            </div>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex justify-between flex-row">
                    <div>
                      <CardDescription>Total Revenue</CardDescription>
                      <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        $1,250.00
                      </CardTitle>
                    </div>
                    <div>
                      <Badge variant="outline">
                        <TrendingUpIcon />
                        +12.5%
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                      Trending up this month{" "}
                      <TrendingUpIcon className="size-4" />
                    </div>
                    <div className="text-muted-foreground">
                      Visitors for the last 6 months
                    </div>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="flex justify-between flex-row">
                    <div>
                      <CardDescription>New Customers</CardDescription>
                      <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        1,234
                      </CardTitle>
                    </div>
                    <div>
                      <Badge variant="outline">
                        <TrendingDownIcon />
                        -20%
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                      Down 20% this period <TrendingUpIcon className="size-4" />
                    </div>
                    <div className="text-muted-foreground">
                      Acquisition needs attention
                    </div>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="flex justify-between flex-row">
                    <div>
                      <CardDescription>Active Accounts</CardDescription>
                      <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        45,678
                      </CardTitle>
                    </div>
                    <div>
                      <Badge variant="outline">
                        <TrendingUpIcon />
                        +12.5%
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                      Strong user retention{" "}
                      <TrendingUpIcon className="size-4" />
                    </div>
                    <div className="text-muted-foreground">
                      Engagement exceed targets
                    </div>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="flex justify-between flex-row">
                    <div>
                      <CardDescription>Growth Rate</CardDescription>
                      <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        4.5%
                      </CardTitle>
                    </div>
                    <div>
                      <Badge variant="outline">
                        <TrendingUpIcon />
                        +4.5%
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                      Steady performance increase{" "}
                      <TrendingUpIcon className="size-4" />
                    </div>
                    <div className="text-muted-foreground">
                      Meets growth projections
                    </div>
                  </CardFooter>
                </Card>
              </div>
              <div className="flex w-full gap-4">
                <ChartAreaGradient />
                <ChartBarMultiple />
                <ChartPieDonutText />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

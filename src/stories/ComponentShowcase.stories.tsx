import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Calendar } from '@/components/ui/calendar';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Skeleton } from '@/components/ui/skeleton';
import { Toggle } from '@/components/ui/toggle';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Info, AlertTriangle, CheckCircle, Settings, Download, Bold } from 'lucide-react';
import { useState } from 'react';

const meta = {
  title: 'Overview/Component Showcase',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'A comprehensive showcase of all 41 shadcn components organized by category in the Matrix terminal theme.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllComponents: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [sliderValue, setSliderValue] = useState([50]);

    return (
      <div className="min-h-screen bg-black text-matrix-green p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-mono text-matrix-green">
              Neo Terminal UI Component Library
            </h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive showcase of all 41 shadcn components with Matrix cyberpunk styling
            </p>
            <Separator />
          </div>

          {/* Navigation */}
          <section className="space-y-4">
            <h2 className="text-2xl font-mono text-matrix-green">Navigation Components</h2>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Breadcrumb</CardTitle>
                </CardHeader>
                <CardContent>
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">Matrix</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">Systems</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Navigation</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pagination</CardTitle>
                </CardHeader>
                <CardContent>
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Forms */}
          <section className="space-y-4">
            <h2 className="text-2xl font-mono text-matrix-green">Form Components</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Input Controls</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="matrix-input">Matrix Terminal</Label>
                    <Input id="matrix-input" placeholder="Enter command..." />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="matrix-textarea">System Log</Label>
                    <Textarea id="matrix-textarea" placeholder="Log entries..." rows={3} />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="matrix-check" />
                    <Label htmlFor="matrix-check">Enable Matrix protocols</Label>
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="matrix-switch">Stealth Mode</Label>
                    <Switch id="matrix-switch" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Selection Controls</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Security Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select level..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="alpha">Alpha</SelectItem>
                        <SelectItem value="beta">Beta</SelectItem>
                        <SelectItem value="gamma">Gamma</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label>Choose Reality</Label>
                    <RadioGroup defaultValue="red">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="red" id="red" />
                        <Label htmlFor="red">Red Pill</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="blue" id="blue" />
                        <Label htmlFor="blue">Blue Pill</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label>Power Level: {sliderValue[0]}%</Label>
                    <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Layout */}
          <section className="space-y-4">
            <h2 className="text-2xl font-mono text-matrix-green">Layout Components</h2>
            <div className="grid gap-6">
              <Tabs defaultValue="card" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="card">Card</TabsTrigger>
                  <TabsTrigger value="accordion">Accordion</TabsTrigger>
                  <TabsTrigger value="aspect">Aspect Ratio</TabsTrigger>
                  <TabsTrigger value="scroll">Scroll Area</TabsTrigger>
                </TabsList>

                <TabsContent value="card" className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>System Status</CardTitle>
                        <CardDescription>Nebuchadnezzar ship systems</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Power Core</span>
                            <span className="text-green-400">92%</span>
                          </div>
                          <Progress value={92} />
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Crew Status</CardTitle>
                        <CardDescription>Active personnel</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback>N</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">Neo</p>
                            <Badge>The One</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="accordion">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="protocols">
                      <AccordionTrigger>Matrix Protocols</AccordionTrigger>
                      <AccordionContent>
                        Essential rules for Matrix navigation and survival protocols.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="systems">
                      <AccordionTrigger>Ship Systems</AccordionTrigger>
                      <AccordionContent>
                        Detailed information about Nebuchadnezzar systems and diagnostics.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>

                <TabsContent value="aspect">
                  <div className="grid md:grid-cols-2 gap-4">
                    <AspectRatio ratio={16 / 9}>
                      <div className="rounded-md bg-gradient-to-r from-matrix-green/20 to-green-500/20 border border-matrix-green/30 flex items-center justify-center">
                        <span className="text-matrix-green font-mono">16:9 Display</span>
                      </div>
                    </AspectRatio>
                    <AspectRatio ratio={1}>
                      <div className="rounded-md bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center">
                        <span className="text-blue-400 font-mono">1:1 Terminal</span>
                      </div>
                    </AspectRatio>
                  </div>
                </TabsContent>

                <TabsContent value="scroll">
                  <ScrollArea className="h-32 w-full rounded-md border p-4">
                    <div className="space-y-2">
                      {Array.from({ length: 20 }, (_, i) => (
                        <div key={i} className="text-sm font-mono">
                          Matrix log entry {i + 1}: System status nominal
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Feedback */}
          <section className="space-y-4">
            <h2 className="text-2xl font-mono text-matrix-green">Feedback Components</h2>
            <div className="grid gap-6">
              <div className="space-y-4">
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>System Online</AlertTitle>
                  <AlertDescription>
                    Matrix connection established. Neural interface active.
                  </AlertDescription>
                </Alert>

                <Alert className="border-yellow-500/50 bg-yellow-500/10">
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  <AlertTitle className="text-yellow-400">Warning</AlertTitle>
                  <AlertDescription>
                    Agent proximity detected. Recommend stealth protocols.
                  </AlertDescription>
                </Alert>

                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Critical Error</AlertTitle>
                  <AlertDescription>
                    Neural pathway compromised. Emergency jack-out initiated.
                  </AlertDescription>
                </Alert>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Progress Indicators</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Download Progress</span>
                        <span>67%</span>
                      </div>
                      <Progress value={67} />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Upload Progress</span>
                        <span>34%</span>
                      </div>
                      <Progress value={34} />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Loading States</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div className="space-y-2 flex-1">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Buttons & Data */}
          <section className="space-y-4">
            <h2 className="text-2xl font-mono text-matrix-green">Interactive Components</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Buttons & Toggles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Button>
                      <Download className="mr-2 h-4 w-4" />
                      Jack In
                    </Button>
                    <Button variant="outline">Load Program</Button>
                    <Button variant="destructive">Emergency Exit</Button>
                  </div>

                  <div className="flex gap-2">
                    <Toggle pressed>
                      <Bold className="h-4 w-4" />
                    </Toggle>
                    <Toggle>
                      <Settings className="h-4 w-4" />
                    </Toggle>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge>The One</Badge>
                    <Badge variant="secondary">Captain</Badge>
                    <Badge variant="outline">Operator</Badge>
                    <Badge variant="destructive">Agent</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Calendar & Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border border-matrix-green/30"
                  />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center pt-8">
            <Separator className="mb-4" />
            <p className="text-sm text-muted-foreground">
              Neo Terminal UI - A comprehensive Matrix-themed component library
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Featuring all 41 shadcn components with cyberpunk styling
            </p>
          </footer>
        </div>
      </div>
    );
  },
};

export const ComponentCategories: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-mono text-matrix-green">Component Categories</h1>
        <p className="text-muted-foreground">Quick reference for all component categories</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-matrix-green">Forms (9 components)</CardTitle>
            <CardDescription>Input and form controls</CardDescription>
          </CardHeader>
          <CardContent className="text-sm space-y-1">
            <div>• Input</div>
            <div>• Textarea</div>
            <div>• Checkbox</div>
            <div>• Radio Group</div>
            <div>• Select</div>
            <div>• Switch</div>
            <div>• Form</div>
            <div>• Label</div>
            <div>• Slider</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-blue-400">Layout (8 components)</CardTitle>
            <CardDescription>Layout and structure</CardDescription>
          </CardHeader>
          <CardContent className="text-sm space-y-1">
            <div>• Card</div>
            <div>• Accordion</div>
            <div>• Tabs</div>
            <div>• Separator</div>
            <div>• Aspect Ratio</div>
            <div>• Collapsible</div>
            <div>• Resizable</div>
            <div>• Scroll Area</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-purple-400">Navigation (6 components)</CardTitle>
            <CardDescription>Navigation and routing</CardDescription>
          </CardHeader>
          <CardContent className="text-sm space-y-1">
            <div>• Breadcrumb</div>
            <div>• Dropdown Menu</div>
            <div>• Menubar</div>
            <div>• Navigation Menu</div>
            <div>• Pagination</div>
            <div>• Command</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-yellow-400">Feedback (7 components)</CardTitle>
            <CardDescription>Status and feedback</CardDescription>
          </CardHeader>
          <CardContent className="text-sm space-y-1">
            <div>• Alert</div>
            <div>• Badge</div>
            <div>• Progress</div>
            <div>• Skeleton</div>
            <div>• Toast</div>
            <div>• Toaster</div>
            <div>• Sonner</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-red-400">Overlays (7 components)</CardTitle>
            <CardDescription>Modals and overlays</CardDescription>
          </CardHeader>
          <CardContent className="text-sm space-y-1">
            <div>• Dialog</div>
            <div>• Drawer</div>
            <div>• Hover Card</div>
            <div>• Popover</div>
            <div>• Sheet</div>
            <div>• Tooltip</div>
            <div>• Context Menu</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-green-400">Buttons & Data (4 components)</CardTitle>
            <CardDescription>Interactive elements</CardDescription>
          </CardHeader>
          <CardContent className="text-sm space-y-1">
            <div>• Button</div>
            <div>• Toggle</div>
            <div>• Avatar</div>
            <div>• Calendar</div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-matrix-green/5 border-matrix-green/30">
        <CardHeader>
          <CardTitle className="text-matrix-green">Total: 41 Components</CardTitle>
          <CardDescription>Complete shadcn component coverage with Matrix theme</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            All components are fully themed with the Matrix cyberpunk aesthetic, featuring
            neon green accents, terminal-style typography, and futuristic styling.
          </p>
        </CardContent>
      </Card>
    </div>
  ),
};
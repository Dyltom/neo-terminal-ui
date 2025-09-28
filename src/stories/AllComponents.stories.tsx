import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ChevronDown, Check, X, Plus, Settings, User, Mail, Phone, Calendar, Search, Bell, Home, Star, Heart, Trash, Edit } from 'lucide-react'

// Import all shadcn/ui components
import {
  // Basic components
  Button,
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  Input,
  Textarea,
  Badge,
  Alert, AlertTitle, AlertDescription,
  Label,
  Separator,

  // Complex components
  Avatar, AvatarImage, AvatarFallback,
  Tooltip, TooltipTrigger, TooltipContent, TooltipProvider,
  AspectRatio,
  Checkbox,
  RadioGroup, RadioGroupItem,
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
  Switch,
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter,
  Popover, PopoverTrigger, PopoverContent,
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator,
  Tabs, TabsList, TabsTrigger, TabsContent,
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
  Progress,
  Toggle,
} from '../components/ui'

const meta: Meta = {
  title: 'Showcase/All Components',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Comprehensive showcase of all shadcn/ui components with Matrix terminal theme.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const ComponentShowcase: Story = {
  render: () => (
    <TooltipProvider>
      <div className="p-8 space-y-12 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-matrix-green glow">NEO TERMINAL UI</h1>
          <p className="text-lg text-matrix-green/80">Complete shadcn/ui Component Library with Matrix Theme</p>
          <Separator className="bg-matrix-green/30" />
        </div>

        {/* Basic Components Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-matrix-green border-b border-matrix-green/30 pb-2">
            BASIC COMPONENTS
          </h2>

          {/* Buttons */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>All available button styles and states</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button variant="primary">Primary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="amber">Amber</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon"><Settings className="h-4 w-4" /></Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button disabled>Disabled</Button>
                <Button loading>Loading</Button>
                <Button pulse>Pulse</Button>
                <Button glitch>Glitch</Button>
              </div>
            </CardContent>
          </Card>

          {/* Badges */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Badge Variants</CardTitle>
              <CardDescription>Status indicators and labels</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </CardContent>
          </Card>

          {/* Alerts */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Alert Components</CardTitle>
              <CardDescription>System messages and notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Bell className="h-4 w-4" />
                <AlertTitle>System Alert</AlertTitle>
                <AlertDescription>
                  This is a default alert with some information.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <X className="h-4 w-4" />
                <AlertTitle>Error Alert</AlertTitle>
                <AlertDescription>
                  Something went wrong. Please check your connection.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

        {/* Form Components Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-matrix-green border-b border-matrix-green/30 pb-2">
            FORM COMPONENTS
          </h2>

          <Card className="p-6">
            <CardHeader>
              <CardTitle>Form Controls</CardTitle>
              <CardDescription>Input fields and interactive elements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="user@matrix.net" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
              </div>

              {/* Textarea */}
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Enter your message..." rows={3} />
              </div>

              {/* Checkbox and Radio */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label>Checkbox Options</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" defaultChecked />
                      <Label htmlFor="terms">Accept terms and conditions</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="marketing" />
                      <Label htmlFor="marketing">Receive marketing emails</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Radio Options</Label>
                  <RadioGroup defaultValue="option1" className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option1" id="option1" />
                      <Label htmlFor="option1">Option 1</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option2" id="option2" />
                      <Label htmlFor="option2">Option 2</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Select and Switch */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Select Option</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>Switch Controls</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="notifications" defaultChecked />
                      <Label htmlFor="notifications">Enable notifications</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="darkmode" />
                      <Label htmlFor="darkmode">Dark mode</Label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Layout Components Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-matrix-green border-b border-matrix-green/30 pb-2">
            LAYOUT COMPONENTS
          </h2>

          {/* Tabs */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Tabs Component</CardTitle>
              <CardDescription>Tabbed interface for organizing content</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="tab1">Dashboard</TabsTrigger>
                  <TabsTrigger value="tab2">Settings</TabsTrigger>
                  <TabsTrigger value="tab3">Profile</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="mt-4">
                  <Card>
                    <CardContent className="pt-6">
                      <p>Dashboard content goes here...</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="tab2" className="mt-4">
                  <Card>
                    <CardContent className="pt-6">
                      <p>Settings content goes here...</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="tab3" className="mt-4">
                  <Card>
                    <CardContent className="pt-6">
                      <p>Profile content goes here...</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Accordion */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Accordion Component</CardTitle>
              <CardDescription>Collapsible content sections</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>System Requirements</AccordionTrigger>
                  <AccordionContent>
                    Minimum system requirements for running the Matrix terminal interface.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Network Configuration</AccordionTrigger>
                  <AccordionContent>
                    Configure your network settings to access the Matrix.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Security Protocols</AccordionTrigger>
                  <AccordionContent>
                    Security measures and encryption protocols in use.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Aspect Ratio */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Aspect Ratio</CardTitle>
              <CardDescription>Maintains consistent aspect ratios for content</CardDescription>
            </CardHeader>
            <CardContent>
              <AspectRatio ratio={16 / 9} className="bg-matrix-green/10 rounded-md">
                <div className="flex items-center justify-center h-full text-matrix-green">
                  16:9 Aspect Ratio Container
                </div>
              </AspectRatio>
            </CardContent>
          </Card>
        </section>

        {/* Interactive Components Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-matrix-green border-b border-matrix-green/30 pb-2">
            INTERACTIVE COMPONENTS
          </h2>

          {/* Avatar */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Avatar Component</CardTitle>
              <CardDescription>User profile pictures and fallbacks</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                <AvatarFallback>MX</AvatarFallback>
              </Avatar>
            </CardContent>
          </Card>

          {/* Progress */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Progress Indicators</CardTitle>
              <CardDescription>Show completion status and loading states</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>System Upload: 25%</Label>
                <Progress value={25} />
              </div>
              <div className="space-y-2">
                <Label>Data Transfer: 60%</Label>
                <Progress value={60} />
              </div>
              <div className="space-y-2">
                <Label>Connection: 90%</Label>
                <Progress value={90} />
              </div>
            </CardContent>
          </Card>

          {/* Toggle */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Toggle Component</CardTitle>
              <CardDescription>Toggle buttons for binary states</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center space-x-4">
              <Toggle aria-label="Bold">
                <Star className="h-4 w-4" />
              </Toggle>
              <Toggle aria-label="Italic" pressed>
                <Heart className="h-4 w-4" />
              </Toggle>
              <Toggle aria-label="Underline">
                <Bell className="h-4 w-4" />
              </Toggle>
            </CardContent>
          </Card>
        </section>

        {/* Overlay Components Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-matrix-green border-b border-matrix-green/30 pb-2">
            OVERLAY COMPONENTS
          </h2>

          {/* Dialog */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Dialog Component</CardTitle>
              <CardDescription>Modal dialogs and confirmations</CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Matrix System Alert</DialogTitle>
                    <DialogDescription>
                      This is a modal dialog with Matrix terminal styling. You can use this for confirmations,
                      forms, or any content that needs user focus.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <p className="text-sm text-matrix-green/80">
                      Dialog content goes here...
                    </p>
                  </div>
                  <DialogFooter>
                    <Button variant="ghost">Cancel</Button>
                    <Button>Confirm</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Popover */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Popover Component</CardTitle>
              <CardDescription>Contextual overlays and tooltips</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center space-x-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Open Popover</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="space-y-2">
                    <h4 className="font-medium">System Information</h4>
                    <p className="text-sm text-matrix-green/80">
                      This is a popover with additional information or controls.
                    </p>
                    <div className="flex space-x-2">
                      <Button size="sm">Action</Button>
                      <Button size="sm" variant="ghost">Cancel</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover for Tooltip</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a tooltip with helpful information</p>
                </TooltipContent>
              </Tooltip>
            </CardContent>
          </Card>

          {/* Dropdown Menu */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Dropdown Menu</CardTitle>
              <CardDescription>Context menus and action lists</CardDescription>
            </CardHeader>
            <CardContent>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Menu Options
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Mail className="mr-2 h-4 w-4" />
                    Messages
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Calendar className="mr-2 h-4 w-4" />
                    Calendar
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-400">
                    <Trash className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <div className="text-center pt-8">
          <Separator className="bg-matrix-green/30 mb-4" />
          <p className="text-matrix-green/60">
            All components styled with Matrix terminal theme • Built with shadcn/ui
          </p>
        </div>
      </div>
    </TooltipProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all available shadcn/ui components with Matrix terminal styling.',
      },
    },
  },
}

export const ComponentGrid: Story = {
  render: () => (
    <TooltipProvider>
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Button Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Buttons</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full">Primary</Button>
              <Button variant="outline" className="w-full">Outline</Button>
              <Button variant="ghost" className="w-full">Ghost</Button>
            </CardContent>
          </Card>

          {/* Form Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Form Controls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input placeholder="Email address" />
              <div className="flex items-center space-x-2">
                <Checkbox id="terms-grid" />
                <Label htmlFor="terms-grid" className="text-sm">Accept terms</Label>
              </div>
              <Switch />
            </CardContent>
          </Card>

          {/* Feedback Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Feedback</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Badge>Status</Badge>
              <Progress value={45} />
              <Alert>
                <AlertTitle>Info</AlertTitle>
                <AlertDescription>System status normal</AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Avatar Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Avatar</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center space-x-2">
              <Avatar>
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>MX</AvatarFallback>
              </Avatar>
            </CardContent>
          </Card>

          {/* Interactive Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Interactive</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                </TabsList>
              </Tabs>
              <Toggle aria-label="Toggle">
                <Star className="h-4 w-4" />
              </Toggle>
            </CardContent>
          </Card>

          {/* Overlay Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Overlays</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full">Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Dialog Title</DialogTitle>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full">Popover</Button>
                </PopoverTrigger>
                <PopoverContent>Popover content</PopoverContent>
              </Popover>
            </CardContent>
          </Card>

        </div>
      </div>
    </TooltipProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Grid layout showcasing components in organized cards.',
      },
    },
  },
}
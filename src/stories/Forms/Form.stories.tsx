import type { Meta, StoryObj } from '@storybook/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

const meta = {
  title: 'Forms/Form',
  component: Form,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive form system built with react-hook-form and Zod validation.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicForm: Story = {
  render: () => {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
        email: "",
        password: "",
      },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values);
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-80">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="neo" {...field} />
                </FormControl>
                <FormDescription>
                  Your Matrix identity handle.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Terminal</FormLabel>
                <FormControl>
                  <Input placeholder="neo@matrix.com" {...field} />
                </FormControl>
                <FormDescription>
                  Your secure communication channel.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Access Code</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormDescription>
                  Your neural interface authentication key.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">Jack In</Button>
        </form>
      </Form>
    );
  },
};

const matrixSetupSchema = z.object({
  codename: z.string().min(3, "Codename must be at least 3 characters"),
  clearanceLevel: z.string(),
  matrixProgram: z.string(),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  agreeToTerms: z.boolean().refine((val) => val === true, "You must accept the terms"),
  enableStealth: z.boolean(),
  autoJackOut: z.boolean(),
});

export const MatrixSetupForm: Story = {
  render: () => {
    const form = useForm<z.infer<typeof matrixSetupSchema>>({
      resolver: zodResolver(matrixSetupSchema),
      defaultValues: {
        codename: "",
        clearanceLevel: "",
        matrixProgram: "",
        bio: "",
        agreeToTerms: false,
        enableStealth: true,
        autoJackOut: true,
      },
    });

    function onSubmit(values: z.infer<typeof matrixSetupSchema>) {
      console.log("Matrix setup:", values);
    }

    return (
      <div className="p-6 border border-matrix-green/30 rounded-lg bg-black/50">
        <h3 className="text-lg font-mono text-matrix-green mb-6">Matrix Interface Setup</h3>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-96">
            <FormField
              control={form.control}
              name="codename"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Codename</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your Matrix codename..." {...field} />
                  </FormControl>
                  <FormDescription>
                    Your identity within the Matrix simulation.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="clearanceLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Security Clearance</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select clearance level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="level1">Level 1 - Basic Access</SelectItem>
                      <SelectItem value="level2">Level 2 - Standard Operations</SelectItem>
                      <SelectItem value="level3">Level 3 - Advanced Protocols</SelectItem>
                      <SelectItem value="level4">Level 4 - Administrator</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Determines your access level within Zion systems.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="matrixProgram"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Preferred Training Program</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sparring" id="sparring" />
                        <FormLabel htmlFor="sparring" className="font-normal cursor-pointer">
                          Sparring Program
                        </FormLabel>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="jump" id="jump" />
                        <FormLabel htmlFor="jump" className="font-normal cursor-pointer">
                          Jump Program
                        </FormLabel>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="construct" id="construct" />
                        <FormLabel htmlFor="construct" className="font-normal cursor-pointer">
                          Construct Environment
                        </FormLabel>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Personal Background</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your life before the red pill..."
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Your story helps us understand your motivations.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="enableStealth"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Stealth Mode</FormLabel>
                    <FormDescription>
                      Hide your presence from Agent detection systems.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="autoJackOut"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Auto Jack-Out</FormLabel>
                    <FormDescription>
                      Automatically disconnect when Agents are detected.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="agreeToTerms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I accept the terms of Matrix resistance
                    </FormLabel>
                    <FormDescription>
                      By checking this, you agree to follow Zion protocols and understand the risks of Matrix operations.
                    </FormDescription>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Initialize Matrix Interface
            </Button>
          </form>
        </Form>
      </div>
    );
  },
};

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  priority: z.string(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  urgent: z.boolean(),
});

export const ContactForm: Story = {
  render: () => {
    const form = useForm<z.infer<typeof contactSchema>>({
      resolver: zodResolver(contactSchema),
      defaultValues: {
        name: "",
        email: "",
        priority: "",
        subject: "",
        message: "",
        urgent: false,
      },
    });

    function onSubmit(values: z.infer<typeof contactSchema>) {
      console.log("Contact form:", values);
    }

    return (
      <div className="p-6 border border-matrix-green/30 rounded-lg bg-black/50">
        <h3 className="text-lg font-mono text-matrix-green mb-6">Contact Zion Command</h3>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-96">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email@zion.net" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Priority Level</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="low">Low - General Inquiry</SelectItem>
                      <SelectItem value="medium">Medium - Request for Support</SelectItem>
                      <SelectItem value="high">High - Agent Sighting</SelectItem>
                      <SelectItem value="critical">Critical - Code Red</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Brief description of your transmission" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Detailed information about your situation..."
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="urgent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-red-400">
                      Urgent - Requires immediate attention
                    </FormLabel>
                    <FormDescription>
                      Check this only for life-threatening situations or Agent encounters.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Send Transmission
            </Button>
          </form>
        </Form>
      </div>
    );
  },
};
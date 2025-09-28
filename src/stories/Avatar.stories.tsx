import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Display user profile pictures with fallback support and Matrix terminal styling.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const WithImage: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
}

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="/broken-image.jpg" alt="User" />
      <AvatarFallback>UN</AvatarFallback>
    </Avatar>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Avatar className="h-8 w-8">
        <AvatarFallback className="text-xs">XS</AvatarFallback>
      </Avatar>
      <Avatar className="h-10 w-10">
        <AvatarFallback className="text-sm">SM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar className="h-12 w-12">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
      <Avatar className="h-16 w-16">
        <AvatarFallback className="text-lg">XL</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const MatrixAgents: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <div className="text-center">
        <Avatar className="h-12 w-12">
          <AvatarFallback className="bg-matrix-green/20 text-matrix-green border border-matrix-green/30">
            NEO
          </AvatarFallback>
        </Avatar>
        <p className="text-xs text-matrix-green/80 mt-2">Neo</p>
      </div>

      <div className="text-center">
        <Avatar className="h-12 w-12">
          <AvatarFallback className="bg-red-500/20 text-red-400 border border-red-500/30">
            AGT
          </AvatarFallback>
        </Avatar>
        <p className="text-xs text-red-400/80 mt-2">Agent Smith</p>
      </div>

      <div className="text-center">
        <Avatar className="h-12 w-12">
          <AvatarFallback className="bg-blue-500/20 text-blue-400 border border-blue-500/30">
            MOR
          </AvatarFallback>
        </Avatar>
        <p className="text-xs text-blue-400/80 mt-2">Morpheus</p>
      </div>

      <div className="text-center">
        <Avatar className="h-12 w-12">
          <AvatarFallback className="bg-purple-500/20 text-purple-400 border border-purple-500/30">
            TRI
          </AvatarFallback>
        </Avatar>
        <p className="text-xs text-purple-400/80 mt-2">Trinity</p>
      </div>
    </div>
  ),
}

export const UserGroup: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-matrix-green">ACTIVE USERS</h3>
      <div className="space-y-3">
        {[
          { initials: 'JD', name: 'John Doe', status: 'online' },
          { initials: 'JS', name: 'Jane Smith', status: 'away' },
          { initials: 'MJ', name: 'Mike Johnson', status: 'offline' },
          { initials: 'LW', name: 'Lisa Wong', status: 'online' },
        ].map((user, index) => (
          <div key={index} className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback
                className={`
                  ${user.status === 'online' ? 'bg-matrix-green/20 text-matrix-green border-matrix-green/30' : ''}
                  ${user.status === 'away' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' : ''}
                  ${user.status === 'offline' ? 'bg-gray-500/20 text-gray-400 border-gray-500/30' : ''}
                  border
                `}
              >
                {user.initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-matrix-green">{user.name}</p>
              <p className={`text-xs capitalize
                ${user.status === 'online' ? 'text-matrix-green/80' : ''}
                ${user.status === 'away' ? 'text-yellow-400/80' : ''}
                ${user.status === 'offline' ? 'text-gray-400/80' : ''}
              `}>
                {user.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
}

export const WithBadge: Story = {
  render: () => (
    <div className="relative">
      <Avatar className="h-12 w-12">
        <AvatarFallback>UN</AvatarFallback>
      </Avatar>
      <div className="absolute -top-1 -right-1 h-4 w-4 bg-matrix-green rounded-full border-2 border-matrix-black animate-pulse" />
    </div>
  ),
}
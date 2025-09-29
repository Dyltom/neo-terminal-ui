import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card'
import { Terminal } from '../components/matrix-effects/Terminal'
import { Badge } from '../components/ui/badge'
import { Alert, AlertTitle, AlertDescription } from '../components/ui/alert'

function App() {
  return (
    <div className="min-h-screen bg-matrix-black p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-mono text-matrix-green-100 mb-4 uppercase tracking-wider">
            Neo Terminal UI
          </h1>
          <p className="text-matrix-green-300 font-mono">
            Matrix-inspired component library for cyberpunk interfaces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Button Components</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="amber">Amber</Button>
              <Button variant="ghost">Ghost</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Input Components</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Standard input" />
              <Input terminal placeholder="Terminal input" />
              <Input label="Labeled Input" placeholder="With label" />
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>CORE System Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>System operational</p>
                <p>All modules loaded successfully</p>
                <div className="flex gap-2 mt-4">
                  <Badge variant="default">ONLINE</Badge>
                  <Badge variant="outline">MONITORING</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Alert>
          <AlertTitle>System Alert</AlertTitle>
          <AlertDescription>
            This is a sample alert message in the Matrix terminal interface.
          </AlertDescription>
        </Alert>

        <div className="h-96">
          <Terminal
            lines={[
              { type: 'system', content: 'SYSTEM BOOT COMPLETE', timestamp: new Date() },
              { type: 'command', content: 'ls -la', timestamp: new Date() },
              { type: 'output', content: 'drwxr-xr-x 1 user user  512 Jan 1 00:00 .', timestamp: new Date() },
              { type: 'output', content: 'drwxr-xr-x 1 user user  512 Jan 1 00:00 ..', timestamp: new Date() },
              { type: 'output', content: '-rw-r--r-- 1 user user 1024 Jan 1 00:00 matrix.exe', timestamp: new Date() },
            ]}
            prompt="user@matrix:~$"
            onCommand={(cmd) => console.log('Command:', cmd)}
          />
        </div>
      </div>
    </div>
  )
}

export default App
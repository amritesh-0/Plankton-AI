"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useToast } from "@/hooks/use-toast"
import { Mic, Send, Image as ImageIcon, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: number
  type: "user" | "assistant"
  content: string
  timestamp: Date
}

const QUICK_QUESTIONS = [
  "How often should I water my tomato plants?",
  "What are the signs of nitrogen deficiency?",
  "Best practices for pest control?",
  "How to improve soil fertility naturally?",
]

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "assistant",
      content: "Hello! I'm your AI farming assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // TODO: Implement actual AI response
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const assistantMessage: Message = {
        id: messages.length + 2,
        type: "assistant",
        content: "I understand you're asking about plant care. Here's what I recommend based on best agricultural practices...",
        timestamp: new Date(),
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="h-[700px] flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b">
              <h1 className="text-2xl font-bold">AI Farming Assistant</h1>
              <p className="text-muted-foreground">
                Get expert advice for your farming queries
              </p>
            </div>

            {/* Quick Questions */}
            <div className="p-4 border-b">
              <p className="text-sm font-medium mb-3">Quick Questions:</p>
              <div className="flex flex-wrap gap-2">
                {QUICK_QUESTIONS.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setInput(question)
                    }}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>

            {/* Chat Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex gap-3 max-w-[80%]",
                      message.type === "user" ? "ml-auto" : ""
                    )}
                  >
                    <Card
                      className={cn(
                        "p-3",
                        message.type === "user"
                          ? "bg-primary text-primary-foreground"
                          : ""
                      )}
                    >
                      <p>{message.content}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </Card>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3">
                    <Card className="p-3">
                      <Loader2 className="h-5 w-5 animate-spin" />
                    </Card>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => {
                    toast({
                      title: "Coming Soon",
                      description: "Image upload will be available soon!",
                    })
                  }}
                >
                  <ImageIcon className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => {
                    toast({
                      title: "Coming Soon",
                      description: "Voice input will be available soon!",
                    })
                  }}
                >
                  <Mic className="h-5 w-5" />
                </Button>
                <Input
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSend()
                    }
                  }}
                />
                <Button
                  className="px-6"
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
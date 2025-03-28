"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit, Trash2 } from "lucide-react"
import type { User } from "@/lib/types"

interface UserCardProps {
  user: User
  onEdit: () => void
  onDelete: () => void
}

export default function UserCard({ user, onEdit, onDelete }: UserCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="bg-muted p-4 flex justify-center">
        <Image
          src={user.avatar || "/placeholder.svg"}
          alt={`${user.first_name} ${user.last_name}`}
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg">{`${user.first_name} ${user.last_name}`}</h3>
        <p className="text-sm text-muted-foreground">{user.email}</p>
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0">
        <Button variant="outline" size="sm" onClick={onEdit}>
          <Edit className="h-4 w-4 mr-1" /> Edit
        </Button>
        <Button variant="destructive" size="sm" onClick={onDelete}>
          <Trash2 className="h-4 w-4 mr-1" /> Delete
        </Button>
      </CardFooter>
    </Card>
  )
}


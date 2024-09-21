'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Page({ project }: { project: any }) {

  const [openRole, setOpenRole] = useState<string | null>(null)
  const [appliedRole, setAppliedRole] = useState<string | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const router = useRouter()

  const handleApply = (role: string) => {
    setOpenRole(role)
    setDialogOpen(true)
  }

  const confirmApply = () => {
    if (openRole) {
      setAppliedRole(openRole)
    }
    setOpenRole(null)
    setDialogOpen(false)
  }

  const handleCancel = () => {
    setAppliedRole(null)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-md mb-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-800">{project.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <p className="text-gray-600 mb-4">オーナーID: {project.ownerId}</p>
            <p className="text-gray-600 mb-4">ステータス: {project.status}</p>
            <p className="text-gray-600 mb-4">作成日: {new Date(project.createdAt).toLocaleDateString()}</p>
            <p className="text-gray-600 mb-4">更新日: {new Date(project.updatedAt).toLocaleDateString()}</p>
            <div className="mb-4">
              <h3 className="font-semibold text-lg mb-2">必要なスキル:</h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span key={skill} className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-lg mb-2">カテゴリ:</h3>
              <div className="flex flex-wrap gap-2">
                {project.categories.map((category) => (
                  <span key={category} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {category}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-lg mb-2">エリア:</h3>
              <div className="flex flex-wrap gap-2">
                {project.areas.map((area) => (
                  <span key={area} className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-gray-600">チーム人数: {project.memberCount}人</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
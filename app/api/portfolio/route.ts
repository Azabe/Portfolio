import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const dataFilePath = path.join(process.cwd(), 'data', 'portfolio-data.json')

export async function GET() {
  try {
    const fileContents = fs.readFileSync(dataFilePath, 'utf8')
    const data = JSON.parse(fileContents)
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error reading portfolio data:', error)
    return NextResponse.json(
      { error: 'Failed to read portfolio data' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate that we have data
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { error: 'Invalid data provided' },
        { status: 400 }
      )
    }

    // Write to file
    fs.writeFileSync(dataFilePath, JSON.stringify(body, null, 2), 'utf8')
    
    return NextResponse.json({ success: true, message: 'Portfolio data updated successfully' })
  } catch (error) {
    console.error('Error writing portfolio data:', error)
    return NextResponse.json(
      { error: 'Failed to update portfolio data' },
      { status: 500 }
    )
  }
}


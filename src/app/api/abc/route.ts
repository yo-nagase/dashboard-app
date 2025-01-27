import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('😈😈😈abc😈😈😈')
    // Return a simple response
    return NextResponse.json({ message: 'Hello from the API!' }, { status: 200 });
  } catch (error) {
    // Handle any errors
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

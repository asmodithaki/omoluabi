import { NextResponse } from 'next/server';

// Dummy function to simulate logging (you can replace it with real logging to a file or DB)
const logEvent = (event: string) => {
  console.log(`[Auth Log] ${new Date().toISOString()}: ${event}`);
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { event, userId, message } = body;

    // Validate the required fields (basic example)
    if (!event || !userId || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Log the event (you can replace this with actual logging logic like saving to a DB)
    logEvent(`Event: ${event}, User: ${userId}, Message: ${message}`);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Logging error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}

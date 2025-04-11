from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client
from langchain_mcp_adapters.tools import load_mcp_tools
from langgraph.prebuilt import create_react_agent
from openai import OpenAI
from langchain_core.tools import tool
import asyncio
from langchain_openai import ChatOpenAI

model = ChatOpenAI(model="gpt-4o", 
    api_key="")

server_params = StdioServerParameters(
    command="python",  # Executable
    args=["new_mcp.py"],  # Optional command line arguments
    env=None,  # Optional environment variables
)


async def run():
    async with stdio_client(server_params) as (read, write):
        async with ClientSession(read, write) as session:
            # Initialize the connection
            await session.initialize()

            # Get tools
            tools = await load_mcp_tools(session)

            # Create and run the agent
            agent = create_react_agent(model, tools)
            agent_response = await agent.ainvoke({"messages": input("Enter your query")})
            print(agent_response['messages'][-1].content)

    

asyncio.run(run())

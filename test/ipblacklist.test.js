const ipBlacklistCLient = require('../index');

test('should create IPBlacklistAI instance', () => {
    let client = new ipBlacklistCLient.IPBlacklistAI("testAPIKey");
    expect(client.apiKey).toBe("testAPIKey");
    expect(client instanceof ipBlacklistCLient.IPBlacklistAI).toBe(true);
  });

test('should return IPBlacklistAIResult instance', async () => {
    let apiClient = new ipBlacklistCLient.IPBlacklistAI("doe");
    let checkIPMock = jest.spyOn(apiClient, "checkIP");
    let mockResult = new ipBlacklistCLient.IPBlacklistAIResult(
        false,
        "Morocco"
    )

    checkIPMock.mockImplementation((_) => mockResult)

    let result = await apiClient.checkIP("1.2.3.4");
    
    expect(result instanceof ipBlacklistCLient.IPBlacklistAIResult).toBe(true);
    expect(result.country).toBe("Morocco")
    expect(result.isBlackListed).toBe(false)
  });